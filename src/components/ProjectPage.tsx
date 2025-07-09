import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle, Globe, Code, Camera, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import { captureScreenshotFree } from '../utils/screenshot';
import ProjectCard from './ProjectCard';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [screenshot, setScreenshot] = useState<string>('');
  const [screenshotLoading, setScreenshotLoading] = useState(true);

  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === projectId);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  // If no related projects in same category, get random projects
  const suggestedProjects = relatedProjects.length > 0 
    ? relatedProjects 
    : projects.filter(p => p.id !== project.id).slice(0, 3);

  useEffect(() => {
    const loadScreenshot = async () => {
      setScreenshotLoading(true);
      try {
        const result = await captureScreenshotFree(project.url);
        if (result.success && result.imageUrl) {
          setScreenshot(result.imageUrl);
        }
      } catch (error) {
        console.error('Failed to load screenshot:', error);
      } finally {
        setScreenshotLoading(false);
      }
    };

    loadScreenshot();
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [project.url, projectId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'E-commerce': 'bg-purple-500/20 text-purple-400',
      'Business Management': 'bg-blue-500/20 text-blue-400',
      'Healthcare': 'bg-red-500/20 text-red-400',
      'Education': 'bg-green-500/20 text-green-400',
      'Fintech': 'bg-yellow-500/20 text-yellow-400',
      'Marketing': 'bg-pink-500/20 text-pink-400',
      'Technology': 'bg-indigo-500/20 text-indigo-400',
      'Social Platform': 'bg-cyan-500/20 text-cyan-400',
      'Real Estate': 'bg-orange-500/20 text-orange-400',
      'Service Management': 'bg-teal-500/20 text-teal-400',
      'CRM': 'bg-violet-500/20 text-violet-400',
      'Non-Profit': 'bg-emerald-500/20 text-emerald-400',
      'Portfolio': 'bg-rose-500/20 text-rose-400',
      'AI/Technology': 'bg-slate-500/20 text-slate-400',
      'Marketplace': 'bg-amber-500/20 text-amber-400',
      'Professional Services': 'bg-lime-500/20 text-lime-400',
      'Utilities': 'bg-sky-500/20 text-sky-400',
      'Property Management': 'bg-stone-500/20 text-stone-400',
      'Business Tools': 'bg-zinc-500/20 text-zinc-400',
      'Research/Academic': 'bg-fuchsia-500/20 text-fuchsia-400',
      'Education/Social': 'bg-emerald-600/20 text-emerald-300',
      'Education/Healthcare': 'bg-teal-600/20 text-teal-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  const scrollToProjects = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 py-4">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group text-sm sm:text-base"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          {/* Project Navigation */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {previousProject && (
              <button
                onClick={() => navigate(`/project/${previousProject.id}`)}
                className="inline-flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors border border-slate-600 hover:border-slate-500 text-sm sm:text-base"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="inline-flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-colors border border-slate-600 hover:border-slate-500 text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Project Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 flex-1">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Launched: {new Date(project.launchDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">{project.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                Visit Live Site
              </a>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                Request Similar
              </button>
            </div>
          </div>
        </div>

        {/* Screenshot Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <Camera className="w-6 h-6 text-orange-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Live Preview</h2>
          </div>
          
          <div className="relative bg-slate-700/30 rounded-xl overflow-hidden">
            {screenshotLoading ? (
              <div className="aspect-video flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
                <div className="text-center space-y-4">
                  <Loader className="w-8 h-8 text-orange-400 animate-spin mx-auto" />
                  <p className="text-gray-400 text-sm sm:text-base">Capturing screenshot...</p>
                </div>
              </div>
            ) : (
              <div className="relative group">
                <img
                  src={screenshot}
                  alt={`${project.title} Screenshot`}
                  className="w-full aspect-video object-cover min-h-[200px] sm:min-h-[300px]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
                  >
                    View Full Site
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Technologies */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-orange-400" />
              Technologies Used
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-orange-400" />
                    <span className="text-sm sm:text-base">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          {project.keyMetrics && (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-orange-400" />
                Key Metrics
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(project.keyMetrics).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-700 last:border-b-0">
                    <span className="text-gray-400 capitalize text-sm sm:text-base">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-white font-semibold text-sm sm:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Stats */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-orange-400" />
              Project Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-700">
                <span className="text-gray-400 text-sm sm:text-base">Status</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-700">
                <span className="text-gray-400 text-sm sm:text-base">Category</span>
                <span className="text-white text-sm sm:text-base">{project.category}</span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-700">
                <span className="text-gray-400 text-sm sm:text-base">Launch Date</span>
                <span className="text-white text-sm sm:text-base">{new Date(project.launchDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 sm:py-3">
                <span className="text-gray-400 text-sm sm:text-base">Technologies</span>
                <span className="text-white text-sm sm:text-base">{project.technologies.length} used</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-orange-400" />
              Technical Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {project.technicalHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors group"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm sm:text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-orange-400" />
            Key Features & Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-orange-500/50 transition-colors group"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related/Similar Projects */}
        {suggestedProjects.length > 0 && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
              {relatedProjects.length > 0 ? 'Related Projects' : 'More Projects'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {suggestedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                />
              ))}
            </div>
            
            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={scrollToProjects}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Calendar, Tag, CheckCircle } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

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

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer transform hover:scale-105">
      <div className="space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition-colors ml-2 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Tag className="w-3 h-3" />
            <span>Technologies:</span>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <CheckCircle className="w-3 h-3" />
            <span>Key Features:</span>
          </div>
          <div className="space-y-1 sm:space-y-1">
            {project.features.slice(0, 1).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {project.features.length > 1 && (
              <div className="text-xs text-gray-400">
                +{project.features.length - 1} more features
              </div>
            )}
          </div>
        </div>

        {/* Launch Date */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 pt-2 sm:pt-3 border-t border-slate-700">
          <Calendar className="w-3 h-3" />
          <span>Launched: {new Date(project.launchDate).toLocaleDateString()}</span>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/project/${project.id}`)}
          className="w-full mt-3 sm:mt-4 px-4 py-2 sm:py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 text-orange-400 font-medium rounded-lg transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50 transform hover:scale-105 text-sm sm:text-base"
        >
          Explore Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
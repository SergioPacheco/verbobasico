import { Card } from '../ui/Card';

interface StatItem {
  label: string;
  value: string | number;
  icon?: string;
}

interface StatsCardProps {
  title?: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsCard({ title, stats, columns = 2, className = '' }: StatsCardProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <Card className={className}>
      {title && <h3 className="text-sm font-medium text-gray-500 mb-3">{title}</h3>}
      <div className={`grid ${gridCols[columns]} gap-3`}>
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-3 text-center">
            {stat.icon && <span className="text-lg">{stat.icon}</span>}
            <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import { HOURLY_ANALYTICS_DATA } from '../../data/demo/fixtures';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import {
  BarChart3,
  Download,
  Calendar,
  AlertCircle,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const { events } = useDemoDevice();
  const [viewMode, setViewMode] = useState<'hourly' | 'zones'>('hourly');

  const handleExportJSON = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify({ exportDate: new Date().toISOString(), events, HOURLY_ANALYTICS_DATA }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `aura_guide_demo_analytics_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Sample Obstacle Events</Badge>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              Demo Analytics Sandbox
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Proximity Analytics &amp; Threshold Log
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Aggregated hourly threshold-crossing counts. Data in demo mode is illustrative sample telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleExportJSON}
            icon={<Download className="w-4 h-4" />}
          >
            Export JSON
          </Button>
        </div>
      </div>

      {/* Safety & Medical Truth Notice */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-sm text-blue-900 dark:text-blue-200">
            Analytics Truth &amp; Interpretation
          </h4>
          <p className="text-blue-800 dark:text-blue-300 leading-relaxed">
            Obstacle events represent forward sensor threshold detections where proximity dipped below 150 cm or 60 cm.
            They do <strong>not</strong> represent collisions, accidents, or physical injuries.
          </p>
        </div>
      </div>

      {/* Interactive Chart Section */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
              Hourly Detection Distribution (Today)
            </h2>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
              Simulated time-series breakdown across Safe, Approaching, and Close Hazard bands.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={viewMode === 'hourly' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('hourly')}
            >
              Stacked Bar
            </Button>
            <Button
              size="sm"
              variant={viewMode === 'zones' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('zones')}
            >
              Trend Line
            </Button>
          </div>
        </div>

        {/* Recharts Container */}
        <div className="h-80 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            {viewMode === 'hourly' ? (
              <BarChart data={HOURLY_ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="hour" stroke="#8da4be" fontSize={11} />
                <YAxis stroke="#8da4be" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#102238',
                    border: '1px solid #345069',
                    borderRadius: '8px',
                    color: '#F2F8FF',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="close" name="Close Hazard (<60cm)" fill="#EF4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="approaching" name="Approaching (60-150cm)" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                <Bar dataKey="safe" name="Clear Path (>150cm)" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <LineChart data={HOURLY_ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="hour" stroke="#8da4be" fontSize={11} />
                <YAxis stroke="#8da4be" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#102238',
                    border: '1px solid #345069',
                    borderRadius: '8px',
                    color: '#F2F8FF',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Line
                  type="monotone"
                  dataKey="close"
                  name="Close Hazard"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="approaching"
                  name="Approaching"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  name="Total Scanned"
                  stroke="#36D6E9"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Accessible Tabular Alternative for Screen Readers & Details */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
              Accessible Tabular Data Alternative
            </h3>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-0.5">
              Screen-reader accessible table of simulated hourly detections
            </p>
          </div>
          <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
            {HOURLY_ANALYTICS_DATA.length} Intervals Recorded
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted uppercase font-mono">
                <th className="py-2.5 px-3">Time Window</th>
                <th className="py-2.5 px-3">Safe Path (&gt;150cm)</th>
                <th className="py-2.5 px-3">Approaching (60-150cm)</th>
                <th className="py-2.5 px-3">Close Hazard (&lt;60cm)</th>
                <th className="py-2.5 px-3 font-bold">Total Scans</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-aura-light-border/60 dark:divide-aura-dark-border/40 text-aura-light-text dark:text-aura-dark-text font-mono">
              {HOURLY_ANALYTICS_DATA.map((row, i) => (
                <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold">{row.hour}</td>
                  <td className="py-2.5 px-3 text-emerald-600 dark:text-emerald-400">{row.safe}</td>
                  <td className="py-2.5 px-3 text-amber-600 dark:text-amber-400">{row.approaching}</td>
                  <td className="py-2.5 px-3 text-rose-600 dark:text-rose-400 font-bold">{row.close}</td>
                  <td className="py-2.5 px-3 font-bold text-aura-light-text dark:text-aura-dark-text">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import {
  BellRing,
  AlertTriangle,
  ShieldAlert,
  Flame,
  CheckCircle2,
  Trash2,
  AlertOctagon,
  Clock,
  Radio,
} from 'lucide-react';

export const AlertsSosPage: React.FC = () => {
  const { alerts, triggerSosSimulation, dismissAlert, clearAllAlerts } = useDemoDevice();
  const [sosModalOpen, setSosModalOpen] = useState(false);

  const handleConfirmSimulatedSos = () => {
    triggerSosSimulation();
    setSosModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Demo Notification Center</Badge>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              Simulated Safety Feeds
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Alerts &amp; Emergency SOS Simulation
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Review simulated proximity threshold triggers and test how high-priority emergency alerts are visualized.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {alerts.length > 0 && (
            <Button
              size="sm"
              variant="secondary"
              onClick={clearAllAlerts}
              icon={<Trash2 className="w-3.5 h-3.5" />}
            >
              Clear Feed
            </Button>
          )}
        </div>
      </div>

      {/* SOS Simulation Trigger Card */}
      <div className="p-8 rounded-card bg-rose-500/10 border-2 border-rose-500/40 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider font-mono">
              <AlertOctagon className="w-4 h-4" />
              <span>Phase 2 Emergency Dispatch Mock</span>
            </div>
            <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              Emergency SOS Button Simulator
            </h2>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted max-w-xl leading-relaxed">
              Test how an authorized guardian receives high-priority distress signals when the wearer presses the
              tactile emergency button on the belt harness.
            </p>
          </div>

          <Button
            size="lg"
            variant="danger"
            onClick={() => setSosModalOpen(true)}
            icon={<AlertTriangle className="w-5 h-5 animate-pulse" />}
          >
            Simulate SOS Event
          </Button>
        </div>

        {/* Permanent disclaimer tag */}
        <div className="p-3 rounded-lg bg-rose-500/20 text-rose-900 dark:text-rose-200 text-xs font-semibold flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 flex-shrink-0" />
          <span>
            DEMO ONLY — No alert is dispatched to 112, emergency services, or real guardians.
          </span>
        </div>
      </div>

      {/* Active Alerts List */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BellRing className="w-4 h-4 text-aura-light-action dark:text-aura-dark-cyan" />
            <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
              Active Simulated Alerts Feed
            </h3>
          </div>
          <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
            {alerts.length} notifications logged
          </span>
        </div>

        {alerts.length === 0 ? (
          <div className="py-12 text-center text-xs text-aura-light-muted dark:text-aura-dark-muted space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500" />
            <p className="font-medium text-aura-light-text dark:text-aura-dark-text">
              No active alerts in the simulation queue.
            </p>
            <p>Trigger a simulated SOS above or test the distance slider to generate proximity alerts.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                  alert.severity === 'danger'
                    ? 'bg-rose-500/10 border-rose-500/40 text-rose-900 dark:text-rose-200'
                    : alert.severity === 'warning'
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-200'
                    : 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs uppercase tracking-wider font-mono">
                      {alert.title}
                    </span>
                    <Badge variant="demo">Simulated</Badge>
                  </div>
                  <p className="text-xs leading-relaxed text-aura-light-text dark:text-aura-dark-text">
                    {alert.message}
                  </p>
                  <span className="text-[10px] font-mono opacity-70 block">
                    Logged at {new Date(alert.timestamp).toLocaleTimeString()}
                  </span>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => dismissAlert(alert.id)}
                    className="text-xs"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SOS Confirmation Modal */}
      <Modal
        isOpen={sosModalOpen}
        onClose={() => setSosModalOpen(false)}
        title="Simulate SOS Distress Trigger?"
        description="This will test the high-priority alarm card in your local browser sandbox."
        maxWidth="md"
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setSosModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={handleConfirmSimulatedSos}>
              Trigger Simulated SOS
            </Button>
          </>
        }
      >
        <div className="space-y-3 text-xs text-aura-light-muted dark:text-aura-dark-muted">
          <p>
            In a future ESP32 production environment, this event would dispatch cryptographic SMS/push notifications
            to designated guardian contacts with live GPS coordinates.
          </p>
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 font-semibold">
            REMINDER: This is a browser-only demo simulation. No message will be transmitted to emergency authorities
            or real phone numbers.
          </div>
        </div>
      </Modal>
    </div>
  );
};

import { IActionListener } from 'ui/component/common/IActionListener';
import { Model } from 'ui/component/model/Model';

export class ButtonModel extends Model {
  private label: string;
  private listeners: IActionListener[] = [];

  setLabel(label: string): void {
    this.label = label;
  }

  getLabel(): string {
    return this.label;
  }

  addActionListener(actionListener: IActionListener): void {
    this.listeners.push(actionListener);
  }

  getActionListeners(): IActionListener[] {
    return this.listeners;
  }
}

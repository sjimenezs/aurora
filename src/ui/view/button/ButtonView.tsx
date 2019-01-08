import * as React from 'react';
import { View } from '../View';
import { ButtonModel } from '../../widget/button/ButtonModel';
import { IActionListener } from '../../component/common/IActionListener';
import { IButtonView } from './IButtonView';

export class ButtonView extends View implements IButtonView {
  model: ButtonModel;
  view: any;
  elementRef: React.RefObject<any>;

  constructor(model: ButtonModel, id?: string) {
    super(id);
    this.model = model;
  }

  onAction = () => {
    if (this.model.getActionListeners()) {
      this.model
        .getActionListeners()
        .forEach((actionListener: IActionListener) =>
          actionListener.actionPerformed()
        );
    }
  };

  renderComponent = () => {
    return (
      <div
        ref={this.elementRef}
        id={this.getId()}
        onClick={this.onAction}
      >
        {this.model.getLabel()}
      </div>
    );
  }

  paint = () => {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = this.renderComponent();
    }

    return this.view;
  }

  repaint = () => {

  }
}

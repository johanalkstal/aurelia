import { IRegistry } from '@aurelia/kernel';
import { IElement } from '../../dom.interfaces';
import { ILifecycle } from '../../lifecycle';
import { IScope, LifecycleFlags } from '../../observation';
import { Binding } from '../binding';
import { bindingBehavior } from '../binding-behavior';
import { DataAttributeAccessor } from '../target-accessors';

@bindingBehavior('attr')
export class AttrBindingBehavior {
  public static register: IRegistry['register'];

  public bind(flags: LifecycleFlags, scope: IScope, binding: Binding): void {
    binding.targetObserver = new DataAttributeAccessor(binding.locator.get(ILifecycle), <IElement>binding.target, binding.targetProperty);
  }

  public unbind(flags: LifecycleFlags, scope: IScope, binding: Binding): void {
    return;
  }
}

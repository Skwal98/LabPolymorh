import {
  ComponentFactoryResolver,
  Directive,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PolymorphComponentWrapper } from '../classes/component';
import { PrimitiveContext } from '../classes/primitive-context';
import { PolymorphContent } from '../types/content';

@Directive({
  selector: '[polymorphOutlet]',
})
export class PolymorphOutletDirective<T> implements OnChanges {
  @Input('polymorphOutlet') content: PolymorphContent<T> = '';
  @Input('polymorphOutletContext') context!: T;

  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _injector: Injector,
    private readonly _templateRef: TemplateRef<any>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this._viewContainerRef.clear();

    if (isComponent(this.content)) {
      const content = this.content as PolymorphComponentWrapper<object, T>;
      const injector = content.createInjector(this._injector, this.context);
      const componentFactory = this._injector
        .get(ComponentFactoryResolver)
        .resolveComponentFactory(content.component);
      const componentRef = this._viewContainerRef.createComponent(
        componentFactory,
        0,
        injector
      );
    } else if (isTemplate(this.content)) {
      const content = this.content as TemplateRef<unknown>;
      const embeddedViewRef = this._viewContainerRef.createEmbeddedView(
        content,
        new PrimitiveContext(this.context)
      );
      embeddedViewRef.detectChanges();
    }
  }
}

function isComponent<T>(content: PolymorphContent<T>) {
  return content instanceof PolymorphComponentWrapper;
}

function isTemplate<T>(content: PolymorphContent<T>) {
  return content instanceof TemplateRef;
}

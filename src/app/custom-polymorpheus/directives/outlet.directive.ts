import {
  Directive,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
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
    if (isTemplate(this.content)) {
      const content = this.content as TemplateRef<unknown>;
      const embeddedViewRef = this._viewContainerRef.createEmbeddedView(
        content,
        new PrimitiveContext(this.context)
      );
      embeddedViewRef.detectChanges();
    }
  }
}

function isTemplate<T>(content: PolymorphContent<T>) {
  return content instanceof TemplateRef;
}

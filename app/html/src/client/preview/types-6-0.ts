import { Args, ComponentAnnotations, StoryAnnotations, AnnotatedStoryFn } from '@storybook/csf';

import { StoryFnHtmlReturnType } from './types';

export type { Args, ArgTypes, Parameters, StoryContext } from '@storybook/csf';

export type HtmlFramework = {
  component: HTMLElement;
  storyResult: StoryFnHtmlReturnType;
};

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<TArgs = Args> = ComponentAnnotations<HtmlFramework, TArgs>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryFn<TArgs = Args> = AnnotatedStoryFn<HtmlFramework, TArgs>;

/**
 * Story function that represents a CSFv3 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryObj<TArgs = Args> = StoryAnnotations<HtmlFramework, TArgs>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 *
 * NOTE that in Storybook 7.0, this type will be renamed to `StoryFn` and replaced by the current `StoryObj` type.
 *
 */
export type Story<TArgs = Args> = StoryFn<TArgs>;

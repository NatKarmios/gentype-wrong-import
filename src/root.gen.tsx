/* TypeScript file generated from root.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as rootBS__Es6Import from './root.bs';
const rootBS: any = rootBS__Es6Import;

import type {bar as TypesML_bar} from './TypesML.gen';

import type {bar as Types_bar} from '../src/inner/types.gen';

// tslint:disable-next-line:interface-over-type-literal
export type foo = [Types_bar, Types_bar];

// tslint:disable-next-line:interface-over-type-literal
export type fooML = [TypesML_bar, TypesML_bar];

export const hello: string = rootBS.hello;

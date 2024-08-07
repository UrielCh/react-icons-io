import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdMove icon from Ionicons 4
 * @module
 */
export function IoMdMove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 256l-96-96v64h-96v-96h64l-96-96-96 96h64v96h-96v-64l-96 96 96 96v-64h96v96h-64l96 96 96-96h-64v-96h96v64z"}}]})(props);
}
export default IoMdMove;

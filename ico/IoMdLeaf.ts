import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdLeaf icon from Ionicons 4
 * @module
 */
export function IoMdLeaf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 287.6C416 120.9 256 32 256 32S96 120.9 96 287.6c0 118.8 81.3 140.5 128 143.2V480h64v-49.3c46.7-2.6 128-24.3 128-143.1z"}}]})(props);
}
export default IoMdLeaf;

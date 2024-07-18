import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdPodium icon from Ionicons 4
 * @module
 */
export function IoMdPodium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 224h128v192H32zM192 128h128v288H192zM352 288h128v128H352z"}}]})(props);
}
export default IoMdPodium;

import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdFlash icon from Ionicons 4
 * @module
 */
export function IoMdFlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 48v224h64v192l128-256h-64l64-160H160z"}}]})(props);
}
export default IoMdFlash;

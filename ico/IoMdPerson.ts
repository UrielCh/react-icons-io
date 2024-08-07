import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdPerson icon from Ionicons 4
 * @module
 */
export function IoMdPerson(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"}}]})(props);
}
export default IoMdPerson;

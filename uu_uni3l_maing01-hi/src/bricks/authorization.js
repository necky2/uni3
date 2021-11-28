//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Plus4U5 from "uu_plus4u5g01";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Authorization",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Authorization = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const _getPendingContent = () => {
      return "Verifying...";
    };
    const _getAuthorizedContent = () => {
      return <UU5.Bricks.Box colorSchema="success">Congratulations, you are casted to the role!</UU5.Bricks.Box>;
    };
    const _getNotAuthorizedContent = () => {
      return <UU5.Bricks.Box colorSchema="danger">Unfortunately you are not casted in the role.</UU5.Bricks.Box>;
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <h2>Authorization 24-9-1</h2>
        <Plus4U5.App.Authorized roleGroupInterfaceUri="ues:UU-BT:24-9-1">
          <Plus4U5.App.Authorized.Item pending>{_getPendingContent()}</Plus4U5.App.Authorized.Item>
          <Plus4U5.App.Authorized.Item authorized>{_getAuthorizedContent()}</Plus4U5.App.Authorized.Item>
          <Plus4U5.App.Authorized.Item notAuthorized>{_getNotAuthorizedContent()}</Plus4U5.App.Authorized.Item>
        </Plus4U5.App.Authorized>
        <h2>Authorization 1-1</h2>
        <Plus4U5.App.Authorized roleGroupInterfaceUri="ues:UU-BT:1-1">
          <Plus4U5.App.Authorized.Item pending>{_getPendingContent()}</Plus4U5.App.Authorized.Item>
          <Plus4U5.App.Authorized.Item authorized>{_getAuthorizedContent()}</Plus4U5.App.Authorized.Item>
          <Plus4U5.App.Authorized.Item notAuthorized>{_getNotAuthorizedContent()}</Plus4U5.App.Authorized.Item>
        </Plus4U5.App.Authorized>
      </div>
    );
    //@@viewOff:render
  },
});

export default Authorization;

//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLanguage, useLsi, useLsiValues } from "uu5g04-hooks";
import Config from "./config/config";
import Lsi from "./language-lsi";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Language",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Language = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [language, setLanguage] = useLanguage();

    const useLsiResult = useLsi({ cs: "Český text", en: "Anglický text" });

    const useLsiValuesResult = useLsiValues({
      firstText: Lsi.firstText,
      secondText: Lsi.secondText,
    });
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <h2>useLanguage</h2>
        {UU5.Utils.Lsi.getItem({ cs: "Český text", en: "Anglický text" }, language)}

        <h2>useLsi</h2>
        {useLsiResult}

        <h2>useLsiValues</h2>
        <p>{useLsiValuesResult.firstText}</p>
        <p>{useLsiValuesResult.secondText}</p>

        <h2>UU5.Bricks.Lsi</h2>
        <UU5.Bricks.Lsi lsi={{ cs: "Český text", en: "Anglický text" }} />
      </div>
    );
    //@@viewOff:render
  },
});

export default Language;

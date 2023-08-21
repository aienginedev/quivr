import createMentionPlugin from "@draft-js-plugins/mention";
import { useMemo } from "react";

import { useBrainContext } from "@/lib/context/BrainProvider/hooks/useBrainContext";

import { BrainMentionItem } from "../../../BrainMentionItem";

interface MentionPluginProps {
  removeMention: (entityKeyToRemove: string) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useMentionPlugin = (props: MentionPluginProps) => {
  const { removeMention } = props;
  const { setCurrentBrainId } = useBrainContext();

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      mentionComponent: ({ entityKey, mention: { name } }) => (
        <BrainMentionItem
          text={name}
          onRemove={() => {
            setCurrentBrainId(null);
            removeMention(entityKey);
          }}
        />
      ),
      mentionPrefix: "@",
      popperOptions: {
        placement: "top-end",
      },
    });
    const { MentionSuggestions: LegacyMentionSuggestions } = mentionPlugin;
    const legacyPlugins = [mentionPlugin];

    return {
      plugins: legacyPlugins,
      MentionSuggestions: LegacyMentionSuggestions,
    };
  }, []);

  return { MentionSuggestions, plugins };
};

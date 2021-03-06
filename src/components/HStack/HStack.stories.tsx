import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import HStack from "./HStack";
import Button from "../Button";
import { ElementProps } from "../interfaces";

export default {
  title: "Components/HStack",
  component: HStack,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ElementProps> = (args) => <HStack {...args} />;

// Reuse that template for creating different stories
export const RowView = Template.bind({});
RowView.args = {
  children: [
    <Button
      width={200}
      type={"button"}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      I am a button
    </Button>,
    <Button
      width={200}
      type={"button"}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      I am a button
    </Button>,
    <Button
      width={200}
      type={"button"}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      I am a button
    </Button>,
  ],
  backgroundColor: "pink",
  sx: { padding: 1 },
};

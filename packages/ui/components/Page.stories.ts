import MyPage from "./Page.vue";
import * as HeaderStories from "./Header.stories";
import { Story } from "@storybook/vue3";

export default {
  title: "Example/Page",
  component: MyPage,
};

const Template: Story<any> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { user: args.user };
  },
  // Then, those values can be accessed directly in the template
  template: '<my-page :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

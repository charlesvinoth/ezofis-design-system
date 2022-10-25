<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Accordion</template>

    <template #description>
      ezofis has a component called <b>EzAccordion</b>, which can be used to
      hide the content which is not immediately relevant to the user and reveals
      the content when clicked on.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzAccordion
            title="user"
            icon="eva-person-outline"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            class-list="border border-gray-2 rounded-borders"
          >
            <div class="q-pa-md text-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              asperiores. Reiciendis quod, a quia numquam architecto harum
              officia facilis voluptatibus sint. Recusandae libero et minima
              quae necessitatibus vero molestiae fuga. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dignissimos at quidem alias
              eum, quam, delectus labore earum vel mollitia molestiae dolores
              autem esse iste ipsa tempora dicta eos explicabo ratione? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Possimus ab
              totam sit, odio dolore aliquid voluptates reprehenderit
              dignissimos repudiandae ipsa. Deserunt quo dolorem quasi vel iste,
              aspernatur voluptas quos dolore.
            </div>
          </EzAccordion>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- group -->

      <DocExample title="group" :code="example[1]">
        <template #example>
          <div class="border border-gray-2 rounded-borders">
            <EzAccordion
              v-for="country in countries"
              :key="country.id"
              group-name="country"
              :is-pinned="country.isPinned"
              :title="country.label"
              :description="country.description"
              class-list="border-bottom"
              @pin="handlePin(country.label)"
            >
              <div class="q-pa-md text-2 border-top border-gray-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
                asperiores. Reiciendis quod, a quia numquam architecto harum
                officia facilis voluptatibus sint. Recusandae libero et minima
                quae necessitatibus vero molestiae fuga. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dignissimos at quidem alias
                eum, quam, delectus labore earum vel mollitia molestiae dolores
                autem esse iste ipsa tempora dicta eos explicabo ratione? Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Possimus ab
                totam sit, odio dolore aliquid voluptates reprehenderit
                dignissimos repudiandae ipsa. Deserunt quo dolorem quasi vel
                iste, aspernatur voluptas quos dolore.
              </div>
            </EzAccordion>
          </div>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzAccordion = () => import("@/library/components/ez-accordion/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Accordion",

  components: { EzAccordion, DocApi, DocExample },

  data() {
    return {
      countries: [
        {
          id: this.$nano.id(),
          label: "India",
          description: "New Delhi",
          isPinned: false,
        },
        {
          id: this.$nano.id(),
          label: "USA",
          description: "Washington",
          isPinned: true,
        },
        {
          id: this.$nano.id(),
          label: "China",
          description: "Beijing",
          isPinned: false,
        },
        {
          id: this.$nano.id(),
          label: "Russia",
          description: "Moscow",
          isPinned: false,
        },
      ],
      propList: [
        {
          id: this.$nano.id(),
          name: "title",
          type: "String",
          description: "Title of the accordion",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "description",
          type: "String",
          description: "Description of the accordion",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "icon",
          type: "String",
          description: "Display an icon on the left side of the header",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "groupName",
          type: "String",
          description:
            "Unique name that must be applied to all accordion items in that group for coordinated open/close state within the group",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "classList",
          type: "String",
          description: "Apply custom class(es) to the accordion ",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isPinned",
          type: "Boolean",
          description: "Pinned items will always be in open state",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "pin",
          description: "Triggers when pin button is clicked",
          parameters: "Native event",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "default",
          description: "default slot for content",
        },
        {
          id: this.$nano.id(),
          name: "header",
          description: "header slot - can customize the whole header",
        },
        {
          id: this.$nano.id(),
          name: "icon",
          description: "header icon slot",
        },
        {
          id: this.$nano.id(),
          name: "title",
          description: "header title slot",
        },
        {
          id: this.$nano.id(),
          name: "description",
          description: "header description slot",
        },
      ],
      example: [
        '<EzAccordion title="user" icon="eva-person-outline" description="Lorem ipsum dolor sit amet consectetur adipisicing elit" class-list="border border-gray-2 rounded-borders">\n\t<div class="q-pa-md text-2">\n\t\tLorem ipsum dolor sit amet consectetur... \n\t</div>\n</EzAccordion>',
        '<div class="border border-gray-2 rounded-borders">\n\t<EzAccordion\n\t\tv-for="country in countries"\n\t\t:key="country.id"\n\t\t:title="country.label"\n\t\t:description="country.description"\n\t\tclass-list="border-bottom"\n\t>\n\t\t<div class="q-pa-md text-2 border-top border-gray-2">\n\t\t\tLorem ipsum dolor sit amet consectetur...\n\t\t</div>\n\t</EzAccordion>\n</div>',
      ],
      options: [
        `countries: [
            {
              id: this.$nano.id(),
              label: "India",
              description: "New Delhi",
              isPinned: false,
            },
            {
              id: this.$nano.id(),
              label: "USA",
              description: "Washington",
              isPinned: true,
            },
            {
              id: this.$nano.id(),
              label: "China",
              description: "Beijing",
              isPinned: false,
            },
            {
              id: this.$nano.id(),
              label: "Russia",
              description: "Moscow",
              isPinned: false,
            },
          ]`,
      ],
    };
  },

  methods: {
    handlePin(country) {
      this.countries.forEach((_country) => {
        if (_country.label === country) {
          _country.isPinned = !_country.isPinned;
        } else {
          _country.isPinned = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

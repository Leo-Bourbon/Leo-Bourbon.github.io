<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import * as m from "@paraglide/messages.js";
</script>

<template>
  <div class="w-full max-w-none">
    <TabGroup>
      <TabList
        class="tabs-boxed tabs mb-4 items-stretch bg-base-300 p-2 text-base"
      >
        <Tab
          as="template"
          v-slot="{ selected }"
          aria-label="{{"
          m.work_tab_title()
          }}
        >
          <button
            class="prose tab h-auto min-h-fit focus:outline-none focus:ring-0"
            :class="{ 'tab-active': selected }"
          >
            <h2
              :class="{ 'text-primary-content': selected }"
              class="text-[24px]"
            >
              {{ m.work_tab_title() }}
            </h2>
          </button>
        </Tab>
        <Tab
          as="template"
          v-slot="{ selected }"
          aria-label="{{"
          m.education_tab_title()
          }}
        >
          <button
            class="prose tab h-auto min-h-fit focus:outline-none focus:ring-0"
            :class="{ 'tab-active': selected }"
          >
            <h2
              :class="{ 'text-primary-content': selected }"
              class="text-[24px]"
            >
              {{ m.education_tab_title() }}
            </h2>
          </button>
        </Tab>
      </TabList>
      <TabPanels class="">
        <TabPanel class="rounded-box bg-base-200 p-2">
          <div class="rounded-box bg-base-100">
            <slot name="work-content">
              <div class="flex h-64 items-center justify-center">
                <button class="btn">{{ m.work_in_progress() }}</button>
              </div>
            </slot>
          </div>
        </TabPanel>
        <TabPanel class="rounded-box bg-base-200 p-2">
          <div class="rounded-box bg-base-100">
            <slot name="education-content">
              <div class="flex h-64 items-center justify-center">
                <button class="btn">{{ m.work_in_progress() }}</button>
              </div>
            </slot>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

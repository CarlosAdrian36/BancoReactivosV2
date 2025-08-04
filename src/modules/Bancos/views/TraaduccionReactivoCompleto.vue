<template>
  <!-- otro tabs -->
  <div class="">
    <div class="flex justify-center text-4xl">Traductor</div>
    <div class="flex p-8 justify-center">
      <div class="tabs tabs-box justify-center">
        <!-- Ingles -->
        <input type="radio" name="my_tabs_6" class="tab text-lg" aria-label="Ingles" />

        <div class="tab-content bg-base-100 border-base-300 p-6">
          <p class="text-2xl font-bold mb-4">Reactivo #1</p>
          <p>
            Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex eos
            nihil corporis saepe neque velit, commodi tempore numquam a eligendi doloremque tenetur
            eius architecto iste quaerat nemo quisquam dolorem! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Necessitatibus beatae error omnis aliquid, ipsam
            repellendus a eos reprehenderit excepturi rem minus iste nesciunt commodi? Eaque
            consequuntur in suscipit culpa nesciunt. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas totam tempore, cupiditate expedita mollitia voluptas, ducimus
            vero eos architecto nisi reprehenderit ullam provident non ab iste et, iure accusamus
            sed!
          </p>
          <div class="pt-5 pr-4">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
          <div class="pt-2 pr-4 flex justify-end">
            <button class="btn btn-primary">Guardar</button>
          </div>

          <p class="text-2xl font-bold mb-4">Respuestas</p>
          <p>
            A.-Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex
            eos sed!
          </p>
          <div class="pt-5">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
          <button class="btn btn-primary">Primary</button>
          <p>
            B.-Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex
            eos sed!
          </p>
          <div class="pt-5">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
          <p>
            C.-Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex
            eos sed!
          </p>
          <div class="pt-5">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
          <p>
            D.-Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex
            eos sed!
          </p>
          <div class="pt-5">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
        </div>
        <!-- Frances-->
        <input type="radio" name="my_tabs_6" class="tab text-lg" aria-label="Frances" checked />
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <p class="text-2xl font-bold mb-4">Reactivo #1</p>
          <p>
            Tab content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex eos
            nihil corporis saepe neque velit, commodi tempore numquam a eligendi doloremque tenetur
            eius architecto iste quaerat nemo quisquam dolorem! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Necessitatibus beatae error omnis aliquid, ipsam
            repellendus a eos reprehenderit excepturi rem minus iste nesciunt commodi? Eaque
            consequuntur in suscipit culpa nesciunt. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas totam tempore, cupiditate expedita mollitia voluptas, ducimus
            vero eos architecto nisi reprehenderit ullam provident non ab iste et, iure accusamus
            sed!
          </p>
          <div class="pt-5 pr-4">
            <textarea class="textarea w-full" placeholder="Bio"></textarea>
          </div>
          <div class="pt-2 pr-4 flex justify-end">
            <button class="btn btn-primary">Guardar</button>
          </div>
          <div class="pt-5">
            <div class="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" checked="true" />
              <div class="collapse-title font-semibold">Reactivo 1</div>
              <div class="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow the registration
                process.
                <div class="pt-5">
                  <textarea class="textarea w-full" placeholder="Bio"></textarea>
                </div>
                <div class="pt-2 flex justify-end">
                  <button class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto natus
                velit, beatae a officia cupiditate placeat recusandae similique, debitis amet
                veritatis, illo sunt corrupti dolor neque nostrum fugiat. Nobis.
              </div>
              <div class="collapse-content text-sm">
                <div class="pt-5 pr-4">
                  <textarea class="textarea w-full" placeholder="Bio"></textarea>
                </div>
                <div class="pt-2 pr-4 flex justify-end">
                  <button class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
            <div class="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div class="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div class="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make changes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

# changes:
- turbo-drive-confirm: custom confirm dialog with tailwind. One thing missing is modal closing when user clicks elsewhere. Cancel/Confirm no js needed. Esc close works also. Result:
  ![image](https://github.com/hebiscus/hotwire-cookbook/assets/107350293/0771221b-a802-4e4b-aa0b-7bc18ecbf158)
- turbo-frame-modals: deleted (I hope?) unnecessary code in new/edit views. 
# how it works: 
- turbo-drive-disable-on-submit: on submitting the form submit button is disabled, it's content changes (here it shows "Submitting..." text). Create action sleeps for 1 second. 
- turbo-frame-modals: empty turbo frame rendered in `application.html.erb`. Links that open the modal have `data: { turbo_frame: 'modal' }`. New and edit are turbo frames with forms inside. To achieve modal look styles are applied on #modal. Turbo streams are used in create and update actions for updating employees list (in create) and replacing specific employee data (in update). In the same streams files modal frame is updated with nil.
# notes: 
- turbo-frame-modals: Implementation is very clear. What's missing is closing the modal with a button and ideally with clicking Esc and outside the modal. Could be added with stimulus for sure, but maybe an option to use <dialog> and with that 2/3 would be achieved without stimulus. Another potential thing to be improved - instead of putting `<%= turbo_frame_tag "modal" %>` maybe creating a layout for it would be better as it doesn't clutter `application.html.erb`. Maybe will try this out. Should be easily adaptable to Tailwind, but transitions could be tougher - but that's not the problem of this implementation, just overall.

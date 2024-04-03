// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

Turbo.setConfirmMethod(() => {
    const dialog = document.getElementById("turbo-confirm")
    dialog.showModal()

    return new Promise((resolve,rejest) => {
        dialog.addEventListener("close", () => {
            resolve(dialog.returnValue == "confirm")
        }, {once: true})
    })
})

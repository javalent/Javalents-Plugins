/* == Add Buy Me a Coffee to Right Side Menu == */

document.getElementsByClassName('site-footer')[0].innerHTML = '<div style="text-align: center "><a href=\'https://www.buymeacoffee.com/valentine195\' target=\'_blank\'><img height=\'32\' width=\'150\' style=\'border:0;height:32px;opacity:0.5;filter:alpha(opacity=50);\' src=\'https://storage.ko-fi.com/cdn/kofi3.png?v=3\' border=\'0\' alt=\'Buy Me a Coffee at ko-fi.com\' /></a></div>';


/* == Add Copy Code Button == */

const svgCopy =
    '<svg aria-hidden="true" height="12" viewBox="1 -2 12 18" version="1.1" width="18" data-view-component="true"><path fill-rule="evenodd" fill="rgb(200, 200, 200)" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" fill="rgb(200, 200, 200)" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>'
const svgCheck =
    '<svg aria-hidden="true" height="12" viewBox="1 -2 12 18" version="1.1" width="18" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'

// Function to create the copy button element
function createButton() {
    const button = document.createElement('button')
    button.classList.add('copy-code-button')
    button.type = 'button'
    return button
}

// Function to update the button's icon with the specified SVG
function updateButtonIcon(button, icon) {
    button.innerHTML = icon
}

// Function to add a copy button to the code block
function addCopyButton(block) {
    const button = createButton()
    updateButtonIcon(button, svgCopy)
    block.parentNode.insertBefore(button, block.nextSibling)

    // Add click event listener to the button
    button.addEventListener('click', function () {
        copyCodeToClipboard(block.textContent, button)
    })
}

// Function to copy code to clipboard and update the button's icon
function copyCodeToClipboard(code, button) {
    navigator.clipboard
        .writeText(code)
        .then(function () {
            console.log('Copied to clipboard: ' + code)
            button.blur()
            updateButtonIcon(button, svgCheck)
            setTimeout(function () {
                updateButtonIcon(button, svgCopy)
            }, 2000)
        })
        .catch(function (error) {
            console.error('Failed to copy code: ', error)
        })
}

// Check for new code blocks periodically and add copy buttons if needed
setInterval(function () {
    document.querySelectorAll('pre code:not(.copy-code-button)').forEach(addCopyButton)
}, 100)

import '../css/style.css'

const $box = document.querySelector(".box")
$box.addEventListener("click", (e) => {
    const $item = e.target.closest(".item")
    if (!$item) return

    for (let i = 0; i < $box.children.length; i++) {
        if ($box.children[i] === $item) {
            $box.children[i].classList.add("active")
        } else {
            $box.children[i].classList.remove("active")
        }
    }
})
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close");
const themeToggler = document.querySelector(".theme-toggler");

// Show Side Bar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
} )
// Close Side Bar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
} )

// change Theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
} )

// fill orders in table

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === 'recusado' ? 'danger' : order.shipping === 'pendente' ? 'warning' : 'primary'}" >${order.shipping}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

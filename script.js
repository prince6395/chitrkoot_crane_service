// Contact info
const contacts = {
  phone1: {
    label: "Phone No",
    value: "8400902433",
    type: "tel"
  },
  email: {
    label: "Email ID",
    value: "dubeyprincee786@gmail.com",
    type: "email"
  },
//   phone2: {
//     label: "Alternate Phone No",
//     value: "6395291264",
//     type: "tel"
//   }
};

// Insert contact info dynamically
for (const id in contacts) {
  const box = document.getElementById(id);
  const info = contacts[id];

  if (info.type === "tel") {
    box.innerHTML = `<a href="tel:${info.value}"><strong>${info.label}:</strong> ${info.value}</a>`;
  } else if (info.type === "email") {
    box.innerHTML = `<a href="mailto:${info.value}"><strong>${info.label}:</strong> ${info.value}</a>`;
  }
}

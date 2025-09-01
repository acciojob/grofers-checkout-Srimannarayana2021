const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let Total = 0;

	prices.forEach((item)=>{
		Total += parseInt(item.textContent);
	});
	
  // Remove old total row if it exists
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) oldTotalRow.remove();
	
	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	const totalCell = document.createElement("td");
	newRow.classList.add("total-row");
	totalCell.colSpan = 2;
	totalCell.style.fontWeight = "bold";
	totalCell.style.textAlign = "right";
	totalCell.textContent = `Total Price: Rs ${Total}`;
	newRow.appendChild(totalCell);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


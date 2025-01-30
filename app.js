let Tooltip;

document.addEventListener('mouseover', toggleTooltip)
document.addEventListener('mouseout', toggleTooltip)


function toggleTooltip(event) {
	if (event.target.dataset.tooltip == undefined) return;

	if (!Tooltip) {
		let targetBCR = event.target.getBoundingClientRect(); let offset = 5
		Tooltip = document.createElement('div'); Tooltip.className = 'tooltip';
		Tooltip.innerHTML = event.target.dataset.tooltip;
		document.body.append(Tooltip)

		let tooltipBCR = Tooltip.getBoundingClientRect()
		Tooltip.style.top = (targetBCR.top < tooltipBCR.height) ? targetBCR.top+targetBCR.height+offset+'px' : targetBCR.top-tooltipBCR.height-offset+'px'
		let leftOffset = targetBCR.left-(tooltipBCR.width-targetBCR.width)/2; Tooltip.style.left = (leftOffset < 0) ? targetBCR.left+'px' : leftOffset+'px'
	} else { Tooltip.remove(); Tooltip = undefined; }
}
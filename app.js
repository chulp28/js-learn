let cal = document.createElement('table')
createCalendar(cal, 2025, 0)

document.body.append(cal)

function createCalendar(elem, year, month) {
	// header
	let [trh, days] = [document.createElement('tr'), ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']];
	for (day of days) {
		let th = document.createElement('th'); th.textContent = day;
		if (day == 'СБ' || day == 'ВС') th.className = 'weekend';
		trh.append(th);
	} elem.append(trh);
	
	// calendar body
	let [buffer, calBody, date] = [[], [], new Date(year, month)];
	let [skip, count] = [[date.getDay() - 1], new Date (((new Date(date.setMonth(date.getMonth() + 1)))).setDate(0)).getDate()];
	for (let i = 1; i <= count;) {
		if (skip > 0) buffer.push(''), skip--;
		else buffer.push(i), i++;
		if (buffer.length == 7) calBody.push(buffer.slice()), buffer.length = 0;
	};
	while (buffer.length < 7) buffer.push('');
	calBody.push(buffer);

	// table body
	for (week of calBody) {
		let tr = document.createElement('tr');
		for (day of week) {
			let td = document.createElement('td'); td.textContent = day;
			tr.append(td);
		}
		elem.append(tr);
	}
}
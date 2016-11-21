var defaultElementSymbols = "0123456789ABCDEF"
var defaultOperatorSymbols = "*+-/\\%"

class Magma
{
	constructor ()
	{
		this.elements = []
		this.operations = []
	}

	elements
	operations
	
	addOperation ()
	{
		this.operations.push
		(
			new Operation(this,defaultOperatoSymbols[this.operations.length + 1])
		)
	}

	addElement ()
	{
		this.elements.push(defaultElementSymbols[this.elements.length + 1])
	}
}



class Operation
{
	constructor (magma, symbol)
	{
		this.magma = magma
		this.symbol = symbol
		this.table = [[]]
	}
	magma
	symbol
	table
}
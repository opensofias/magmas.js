var defaultElementSymbols = "0123456789ABCDEF"
var defaultOperatorSymbols = "*+-/\\%"

class Magma
{
	constructor ()
	{
		this.elements = []
		this.operations = []
	}
	
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
		this.el = Document.addElement()
		this.magma = magma
		this.symbol = symbol
		this.table = [[]]
	}

	lookup (operand1, operand2)
	{

	}
}

class Query
{
	constructor (magma)
	{
		this.magma = magma
		this.string = ""
	}

	do()
	{
		for 
	}
}




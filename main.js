var defaultElementSymbols = "0123456789ABCDEF"
var defaultOperatorSymbols = "*+-/\\%"

class Magma
{
	constructor ()
	{
		this.elements = []
		this.operations = {}
		operations.count = 0
	}
	
	addOperation (symbol = defaultOperatoSymbols[this.operations.count + 1])
	{
		this.operations[symbol] = new Operation(this,symbol)
		this.operations.count++
	}

	addElement ()
	{
		this.elements.push(defaultElementSymbols[this.elements.length + 1])
	}

	addQuery ()
	{

	}

	lookup (operand1, operand2, operator)
	{
		return operations[operator].table[operand1][operand2]
	}
}

class Operation
{

	constructor (magma, symbol)
	{
		this.el = Document.addElement()
		this.magma = magma
		this.symbol = symbol
		this.table = []
	}
}

class Query
{
	constructor (magma, string = "")
	{
		this.magma = magma
		this.string = string
		this.stack = []
	}

	evaluate ()
	{
		var tmpString = this.string
		while (tmpString.length)
		{
			var symbol = tmpString[0]
			tmpString = tmpString.substring(1)
			if(magma.elements[symbol])
			
		}
	}
}




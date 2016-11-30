var defaultElementSymbols = "0123456789ABCDEF"
var defaultOperatorSymbols = "*+-/\\%"

class Magma
{
	constructor ()
	{
		this.elements = []
		this.queries = []
		this.operations = {}
		operations.count = 0
	}
	
	addOperation (symbol = defaultOperatoSymbols[this.operations.count + 1])
	{
		this.operations [symbol] = new Operation (this,symbol)
		this.operations.count++
	}

	addElement ()
	{
		this.elements.push (defaultElementSymbols[this.elements.length + 1])
	}

	addQuery ()
	{
		this.queries.push (new Query ())
	}

	step (symbol, stack)
	{
		if (this.operations[symbol])
		{
			stack.push (operations [symbol].table [stack.pop] [stack.pop])
		}
		else if (this.elements.indexOf(symbol) >= 0)
			stack.push (symbol)
		else alert ("undefined symbol " + symbol)
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
		this.stack = []
		var tmpString = this.string
		while (tmpString.length)
		{
			var symbol = tmpString [0]
			tmpString = tmpString.substring (1)
			magma.step(stack, symbol)
		}
	}


}




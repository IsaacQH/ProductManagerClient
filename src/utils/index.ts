//Helpers para texto o formatos

//Ayuda a darle forma a los numeros como $ USD
export function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: 'USD'
    }).format(amount)
}
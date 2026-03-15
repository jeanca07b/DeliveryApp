import { useCart } from "../context/CartContext"

export default function Cart() {

  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-8">
        Tu carrito
      </h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-6">
            Total: ${total.toFixed(2)}
          </h2>

          <button
            onClick={clearCart}
            className="mt-4 bg-gray-200 px-4 py-2 rounded"
          >
            Vaciar carrito
          </button>
        </>
      )}

    </section>
  )
}
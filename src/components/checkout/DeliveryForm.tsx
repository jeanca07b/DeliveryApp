import { useTranslation } from "react-i18next"
import CheckoutField from "./CheckoutField"

export interface CheckoutForm {
    name: string
    email: string
    phone: string
    address: string
    city: string
    notes: string
}

interface Props {
    form: CheckoutForm
    errors: Partial<CheckoutForm>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onContinue: () => void
}

export default function DeliveryForm({ form, errors, onChange, onContinue }: Props) {
    const { t } = useTranslation()

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {t("checkout.delivery_data")}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
                <CheckoutField
                    label={t("checkout.full_name")}
                    name="name"
                    value={form.name}
                    error={errors.name}
                    onChange={onChange}
                    placeholder={t("checkout.placeholder_name")}
                />
                <CheckoutField
                    label={t("checkout.email")}
                    name="email"
                    type="email"
                    value={form.email}
                    error={errors.email}
                    onChange={onChange}
                    placeholder={t("checkout.placeholder_email")}
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <CheckoutField
                    label={t("checkout.phone")}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    error={errors.phone}
                    onChange={onChange}
                    placeholder={t("checkout.placeholder_phone")}
                />
                <CheckoutField
                    label={t("checkout.city")}
                    name="city"
                    value={form.city}
                    error={errors.city}
                    onChange={onChange}
                    placeholder={t("checkout.placeholder_city")}
                />
            </div>

            <CheckoutField
                label={t("checkout.address")}
                name="address"
                value={form.address}
                error={errors.address}
                onChange={onChange}
                placeholder={t("checkout.placeholder_address")}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("checkout.notes")}
                </label>
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={onChange}
                    rows={3}
                    placeholder={t("checkout.notes_placeholder")}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                />
            </div>

            <button
                onClick={onContinue}
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition mt-2 cursor-pointer"
            >
                {t("checkout.continue")}
            </button>
        </div>
    )
}
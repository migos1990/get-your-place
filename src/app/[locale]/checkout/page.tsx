"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const locale = useLocale();
  const t = useTranslations("checkout");
  const { items, removeItem, totalPrice, processingFee, grandTotal } =
    useCart();
  const [wantsFurniture, setWantsFurniture] = useState(true);

  // Contact details form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [howDiscovered, setHowDiscovered] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [passport, setPassport] = useState("");
  const [university, setUniversity] = useState("");
  const [exchangeUni, setExchangeUni] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalDay, setArrivalDay] = useState("");
  const [arrivalHour, setArrivalHour] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Step 1: Verification text */}
        <div>
          <p className="text-sm leading-relaxed text-primary">
            {t("verifyTitle")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-primary">
            {t("verifyDesc")}
          </p>
        </div>

        {/* Cart items */}
        {items.map((item) => (
          <div
            key={item.roomId}
            className="overflow-hidden rounded-lg border border-gray-200"
          >
            {/* Room image */}
            {item.roomImage && (
              <div className="relative h-40 w-full">
                <Image
                  src={item.roomImage}
                  alt={item.roomName}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Blue name banner */}
            <div className="bg-primary px-4 py-3">
              <p className="text-sm font-bold text-white">
                {item.apartmentName} {item.roomName}
              </p>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-gray-600">{t("subtotal")}</span>
              <span className="text-sm font-bold text-gray-800">
                {formatPrice(item.price)}
              </span>
            </div>

            {/* Remove button */}
            <div className="border-t border-gray-200 px-4 py-3">
              <button
                onClick={() => removeItem(item.roomId)}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
                {t("remove")}
              </button>
            </div>
          </div>
        ))}

        {/* Furniture option */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="bg-primary px-4 py-3">
            <p className="text-sm font-medium text-white">
              {t("furnitureOption")}
            </p>
          </div>
          <div className="p-4">
            <p className="mb-4 text-sm text-gray-600">
              {t("free")} - {t("depositRequired")}
            </p>
            <div className="flex overflow-hidden rounded-lg border border-gray-200">
              <button
                onClick={() => setWantsFurniture(true)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  wantsFurniture
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {t("yes")}
              </button>
              <button
                onClick={() => setWantsFurniture(false)}
                className={`flex-1 border-l border-gray-200 py-2.5 text-sm font-medium transition-colors ${
                  !wantsFurniture
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {t("no")}
              </button>
            </div>
          </div>
        </div>

        {/* Price summary - stacked bars */}
        <div className="overflow-hidden rounded-lg">
          <div className="flex justify-between bg-primary px-4 py-3 text-white">
            <span className="text-sm">{t("subtotal")}</span>
            <span className="text-sm font-bold">
              {formatPrice(totalPrice())}
            </span>
          </div>
          <div className="flex justify-between border-x border-gray-200 bg-amber-50 px-4 py-3">
            <span className="text-sm text-gray-700">{t("processingFee")}</span>
            <span className="text-sm font-medium">
              {formatPrice(processingFee())}
            </span>
          </div>
          <div className="flex justify-between bg-primary px-4 py-3 text-white">
            <span className="text-sm">{t("total")}</span>
            <span className="text-sm font-bold">
              {formatPrice(grandTotal())}
            </span>
          </div>
        </div>

        {/* Deposit note */}
        {wantsFurniture && (
          <p className="text-xs leading-relaxed text-gray-500">
            {t("depositNote")}
          </p>
        )}

        {/* Next step button */}
        <button className="w-full rounded-lg bg-primary py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
          {t("nextStep")}
        </button>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Step 2: Contact Details */}
        <h2 className="text-lg font-bold text-gray-800">
          {t("contactDetails")}
        </h2>

        {/* Already have an account? Sign in */}
        <div className="space-y-4 rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">{t("alreadyAccount")}</p>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary"
            />
            {t("rememberMe")}
          </label>

          {/* Sign in button */}
          <button className="w-full rounded-lg bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
            {t("signInBtn")}
          </button>

          {/* Forgot password */}
          <Link
            href={`/${locale}/auth/reset-password`}
            className="block text-center text-sm text-primary hover:underline"
          >
            {t("forgotPwd")}
          </Link>
        </div>

        {/* Personal info section */}
        <h3 className="text-base font-bold text-gray-800">
          {t("personalInfo")}
        </h3>

        <div className="space-y-4">
          {/* First name */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("firstName")}
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Last name */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("lastName")}
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("gender")}
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            >
              <option value="">{t("selectGender")}</option>
              <option value="male">{t("male")}</option>
              <option value="female">{t("female")}</option>
              <option value="other">{t("other")}</option>
            </select>
          </div>

          {/* How did you discover us */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("howDiscover")}
            </label>
            <select
              value={howDiscovered}
              onChange={(e) => setHowDiscovered(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            >
              <option value="">{t("selectOption")}</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="friend">{t("wordOfMouth")}</option>
              <option value="university">{t("universityLabel")}</option>
              <option value="other">{t("other")}</option>
            </select>
          </div>

          {/* Nationality */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("nationality")}
            </label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Date of birth */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("birthDate")}
            </label>
            <div className="flex gap-3">
              <select
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
              >
                <option value="">{t("month")}</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
              >
                <option value="">{t("year")}</option>
                {Array.from({ length: 50 }, (_, i) => {
                  const y = new Date().getFullYear() - 16 - i;
                  return (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("phone")}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("address")}
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Passport number */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("passport")}
            </label>
            <input
              type="text"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* University */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("university")}
            </label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Exchange university */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("exchangeUni")}
            </label>
            <select
              value={exchangeUni}
              onChange={(e) => setExchangeUni(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            >
              <option value="">{t("selectOption")}</option>
              <option value="hec">HEC Montréal</option>
              <option value="udem">Université de Montréal</option>
              <option value="mcgill">McGill University</option>
              <option value="concordia">Concordia University</option>
              <option value="ets">ETS</option>
              <option value="esg-uqam">ESG UQAM</option>
              <option value="polytechnique">Polytechnique Montréal</option>
            </select>
          </div>

          {/* Promo code */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("promoCode")}
            </label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Arrival section */}
        <h3 className="text-base font-bold text-gray-800">{t("arrival")}</h3>

        <div className="space-y-4">
          {/* Arrival date */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("arrivalDate")}
            </label>
            <div className="flex gap-3">
              <select
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
              >
                <option value="">{t("month")}</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                value={arrivalDay}
                onChange={(e) => setArrivalDay(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
              >
                <option value="">{t("day")}</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrival time */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("arrivalTime")}
            </label>
            <select
              value={arrivalHour}
              onChange={(e) => setArrivalHour(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            >
              <option value="">{t("hour")}</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i)}>
                  {String(i).padStart(2, "0")}:00
                </option>
              ))}
            </select>
          </div>

          {/* Flight number */}
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("flightNumber")}
            </label>
            <input
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Emergency contact */}
        <h3 className="text-base font-bold text-gray-800">
          {t("emergencyContact")}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("emergencyName")}
            </label>
            <input
              type="text"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-600">
              {t("emergencyPhone")}
            </label>
            <input
              type="tel"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Final submit */}
        <button className="w-full rounded-lg bg-primary py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
          {t("nextStep")}
        </button>
      </div>
    </div>
  );
}

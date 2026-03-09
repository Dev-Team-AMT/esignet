import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Modal affichant la réussite de l'authentification (template oidc-ui).
 * Overlay + carte centrée, style aligné avec Background / FormAction (Tailwind, sky-600).
 */
export default function AuthSuccessModal({ show, onClose, i18nKeyPrefix = "otp" }) {
  const { t } = useTranslation("translation", { keyPrefix: i18nKeyPrefix });

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-success-title"
    >
      <div
        className="rounded shadow-lg bg-white w-full max-w-sm p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-100"
            aria-hidden
          >
            <svg
              className="w-6 h-6 text-sky-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2
            id="auth-success-title"
            className="text-lg font-semibold text-gray-900"
          >
            {t("authentication_success_title")}
          </h2>
          <p className="text-sm text-gray-600">
            {t("authentication_success_msg")}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            {t("authentication_success_ok")}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 -z-10 cursor-default"
        aria-label={t("authentication_success_title")}
      />
    </div>
  );
}

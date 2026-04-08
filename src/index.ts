// ─── HTTP Client ──────────────────────────────────────────────────────────────
export { default as axios } from "axios";
export type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from "axios";

// ─── Validación de esquemas ───────────────────────────────────────────────────
export { z, ZodError } from "zod";
export type { ZodSchema, ZodType, infer as ZodInfer } from "zod";

// ─── Formularios ──────────────────────────────────────────────────────────────
export {
  useForm,
  useController,
  useFieldArray,
  useWatch,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
export type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
  RegisterOptions,
  FieldErrors,
  Control,
  Path,
} from "react-hook-form";
export { zodResolver } from "@hookform/resolvers/zod";

// ─── Data Fetching (React) ────────────────────────────────────────────────────
export {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
  keepPreviousData,
  infiniteQueryOptions,
  queryOptions,
} from "@tanstack/react-query";
export type {
  QueryKey,
  QueryOptions,
  UseQueryOptions,
  UseMutationOptions,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";

// ─── Estado Global ────────────────────────────────────────────────────────────
export { create as createStore, useStore } from "zustand";
export type { StateCreator, StoreApi, UseBoundStore } from "zustand";

// ─── Notificaciones ───────────────────────────────────────────────────────────
export { default as toast, Toaster } from "react-hot-toast";
export type { Toast, ToastOptions, DefaultToastOptions } from "react-hot-toast";
export { toast as notify, Toaster as SonnerToaster } from "sonner";

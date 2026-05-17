"use client";

import React from "react";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────
// Shared types
// ──────────────────────────────────────────────────
interface BaseFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
}

// ──────────────────────────────────────────────────
// TextInputField — wraps shadcn Input
// ──────────────────────────────────────────────────
interface TextInputFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function TextInputField<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  icon,
  disabled,
  className,
}: TextInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          <FormLabel className="text-[12.5px] font-medium text-muted-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              {icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none">
                  {icon}
                </span>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={cn(
                  "rounded-[10px] text-sm h-11 transition-colors",
                  icon && "pl-9",
                  fieldState.error &&
                    "border-destructive bg-destructive/5 focus-visible:ring-destructive/30"
                )}
              />
            </div>
          </FormControl>
          <FormMessage className="text-[11.5px]" />
        </FormItem>
      )}
    />
  );
}

// ──────────────────────────────────────────────────
// SelectField — wraps shadcn Select
// ──────────────────────────────────────────────────
interface SelectFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  options: readonly string[];
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SelectField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = "select an option",
  icon,
  className,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          <FormLabel className="text-[12.5px] font-medium text-muted-foreground">
            {label}
          </FormLabel>
          <div className="relative">
            {icon && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none z-10">
                {icon}
              </span>
            )}
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger
                  className={cn(
                    "rounded-[10px] text-sm h-11",
                    icon && "pl-9",
                    fieldState.error &&
                      "border-destructive bg-destructive/5 focus:ring-destructive/30"
                  )}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="rounded-xl">
                {options.map((opt) => (
                  <SelectItem
                    key={opt}
                    value={opt}
                    className="text-sm capitalize"
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <FormMessage className="text-[11.5px]" />
        </FormItem>
      )}
    />
  );
}

// ──────────────────────────────────────────────────
// RadioGroupField — wraps shadcn RadioGroup
// ──────────────────────────────────────────────────
interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  options: readonly RadioOption[];
  className?: string;
}

export function RadioGroupField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  className,
}: RadioGroupFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          <FormLabel className="text-[12.5px] font-medium text-muted-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-wrap gap-2 mt-1"
            >
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center">
                  <RadioGroupItem
                    value={opt.value}
                    id={`${String(name)}-${opt.value}`}
                    className="sr-only"
                  />
                  <Label
                    htmlFor={`${String(name)}-${opt.value}`}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-[10px] cursor-pointer",
                      "border-[1.5px] text-sm font-medium transition-all duration-150",
                      "border-input bg-background text-muted-foreground",
                      "hover:border-primary/40 hover:bg-primary/5",
                      field.value === opt.value &&
                        "border-primary bg-primary/8 text-primary",
                      fieldState.error && "border-destructive/50"
                    )}
                  >
                    {field.value === opt.value && (
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="text-[11.5px]" />
        </FormItem>
      )}
    />
  );
}

// ──────────────────────────────────────────────────
// TextareaField — wraps shadcn Textarea
// ──────────────────────────────────────────────────
interface TextareaFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  className?: string;
}

export function TextareaField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rows = 4,
  maxLength,
  className,
}: TextareaFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          <FormLabel className="text-[12.5px] font-medium text-muted-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              rows={rows}
              maxLength={maxLength}
              className={cn(
                "rounded-[10px] text-sm resize-y leading-relaxed",
                fieldState.error &&
                  "border-destructive bg-destructive/5 focus-visible:ring-destructive/30"
              )}
            />
          </FormControl>
          <div className="flex items-center justify-between mt-1">
            <FormMessage className="text-[11.5px]" />
            {maxLength && (
              <span className="text-[11px] text-muted-foreground/60 ml-auto">
                {(field.value as string)?.length ?? 0} / {maxLength}
              </span>
            )}
          </div>
        </FormItem>
      )}
    />
  );
}

// ──────────────────────────────────────────────────
// SectionHeader — visual separator for form sections
// ──────────────────────────────────────────────────
interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-sans font-semibold text-foreground leading-tight capitalize">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm font-sans text-muted-foreground leading-tight mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
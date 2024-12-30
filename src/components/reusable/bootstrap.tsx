"use client";

import { PropsWithChildren, useEffect } from "react";
import Button from "../ui/button";
import { service } from "@/services";
import { P } from "../ui/typography";
import { useBootsrapStore } from "@/stores/bootstrap";

interface BootstrapProps extends PropsWithChildren {}

export default function Bootstrap({ children }: BootstrapProps) {
  const bootstrapStore = useBootsrapStore();

  async function init() {
    try {
      bootstrapStore.setLoading(true);
      await service.bootstrap.post();
    } catch (error) {
      console.error(error);
      bootstrapStore.setError(
        "حدث خطأ أثناء محاولة تحميل الموقع, يرجى المحاولة مرة أخرى."
      );
    } finally {
      bootstrapStore.setLoading(false);
    }
  }

  useEffect(() => {
    if (!bootstrapStore.initialiazed) {
      init();
      bootstrapStore.setInitialiazed(true);
    }
  }, []);

  if (bootstrapStore.loading) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center bg-gray-100 z-50"
        role="alert"
        aria-live="assertive"
      >
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <div className="size-4 bg-primary rounded-full animate-ping" />
            <div className="size-4 bg-primary rounded-full animate-ping" />
            <div className="size-4 bg-primary rounded-full animate-ping" />
          </div>
          <P size="sm" className="text-gray-foreground mt-2">
            جاري التحميل...
          </P>
        </div>
      </div>
    );
  }

  if (bootstrapStore.error) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center bg-gray-100 text-destructive z-50"
        role="alert"
      >
        <div className="text-center">
          <P className="font-bold">{bootstrapStore.error}</P>
          <Button
            variant="destructive"
            className="mt-2"
            onClick={() => {
              bootstrapStore.setLoading(true);
              bootstrapStore.setError(null);
              init();
            }}
            aria-label="Retry initialization"
          >
            المحاولة مرة أخرى
          </Button>
        </div>
      </div>
    );
  }

  return children;
}

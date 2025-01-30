import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const consent = localStorage.getItem("ga-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ga-consent", "accepted");
    setShowBanner(false);
    window.location.reload();
    toast({
      title: "Préférences enregistrées",
      description: "Vos préférences de cookies ont été sauvegardées.",
    });
  };

  const handleDecline = () => {
    localStorage.setItem("ga-consent", "declined");
    setShowBanner(false);
    toast({
      title: "Préférences enregistrées",
      description: "Vos préférences de cookies ont été sauvegardées.",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>
              Nous utilisons des cookies pour analyser le trafic de notre site et améliorer votre expérience. 
              En acceptant, vous nous aidez à comprendre comment notre site est utilisé.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDecline}>
              Refuser
            </Button>
            <Button onClick={handleAccept}>
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
// Types de base pour les abonnements
export type PaymentFrequency = "weekly" | "monthly" | "quarterly" | "yearly";

export type SubscriptionStatus = "active" | "paused" | "cancelled";

export type Category =
  | "streaming"
  | "music"
  | "gaming"
  | "productivity"
  | "news"
  | "fitness"
  | "food"
  | "transport"
  | "education"
  | "other";

// Interface principale d'un abonnement
export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: string;
  frequency: PaymentFrequency;
  category: Category;
  startDate: Date;
  nextPayment: Date;
  status: SubscriptionStatus;
  logoUrl?: string;
  description?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Interface pour le formulaire d'ajout/modification
export interface SubscriptionFormData {
  name: string;
  price: string; // String car vient du formulaire
  frequency: PaymentFrequency;
  category: Category;
  startDate: Date;
  logoUrl?: string;
  description?: string;
}

// Interface pour les filtres
export interface FilterOptions {
  status?: SubscriptionStatus[];
  categories?: Category[];
  priceRange?: { min: number; max: number };
  searchQuery?: string;
}

// Interface pour les statistiques
export interface SubscriptionStats {
  totalMonthly: number;
  totalYearly: number;
  activeCount: number;
  pausedCount: number;
  cancelledCount: number;
  topCategories: { category: Category; count: number; total: number }[];
  nextPayments: { subscription: Subscription; daysUntil: number }[];
}

// Interface pour les abonnements populaires (API)
export interface PopularSubscription {
  id: string;
  name: string;
  category: Category;
  logoUrl: string;
  suggestedPrice: number;
  frequency: PaymentFrequency;
  description?: string;
}

// Types utilitaires
export type CreateSubscriptionPayload = Omit<
  Subscription,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateSubscriptionPayload = Partial<
  Omit<Subscription, "id" | "userId" | "createdAt" | "updatedAt">
>;

// Interface pour les props des composants
export interface SubscriptionCardProps {
  subscription: Subscription;
  onPress?: (subscription: Subscription) => void;
  onEdit?: (subscription: Subscription) => void;
  onDelete?: (subscription: Subscription) => void;
}

export interface SubscriptionListProps {
  subscriptions: Subscription[];
  filters?: FilterOptions;
  onSubscriptionPress?: (subscription: Subscription) => void;
  onSubscriptionEdit?: (subscription: Subscription) => void;
  onSubscriptionDelete?: (subscription: Subscription) => void;
}

// Fonctions utilitaires de types
export const PAYMENT_FREQUENCIES: { value: PaymentFrequency; label: string }[] =
  [
    { value: "weekly", label: "Hebdomadaire" },
    { value: "monthly", label: "Mensuel" },
    { value: "quarterly", label: "Trimestriel" },
    { value: "yearly", label: "Annuel" },
  ];

export const CATEGORIES: { value: Category; label: string; icon: string }[] = [
  { value: "streaming", label: "Streaming", icon: "📺" },
  { value: "music", label: "Musique", icon: "🎵" },
  { value: "gaming", label: "Jeux", icon: "🎮" },
  { value: "productivity", label: "Productivité", icon: "💼" },
  { value: "news", label: "Actualités", icon: "📰" },
  { value: "fitness", label: "Fitness", icon: "🏋️" },
  { value: "food", label: "Alimentation", icon: "🍔" },
  { value: "transport", label: "Transport", icon: "🚗" },
  { value: "education", label: "Éducation", icon: "📚" },
  { value: "other", label: "Autre", icon: "📦" },
];

export const SUBSCRIPTION_STATUS: {
  value: SubscriptionStatus;
  label: string;
  color: string;
}[] = [
  { value: "active", label: "Actif", color: "#10B981" },
  { value: "paused", label: "En pause", color: "#F59E0B" },
  { value: "cancelled", label: "Annulé", color: "#EF4444" },
];

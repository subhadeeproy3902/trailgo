"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Train, User, ArrowLeft, ArrowRight } from "lucide-react";
import { roleSelection } from "@/actions/users.actions";

const RoleSelection = ({
  onSelectRole,
  onNext,
}: {
  onSelectRole: (role: string) => void;
  onNext: () => void;
}) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-center">Select your role</h2>
    <RadioGroup
      defaultValue="passenger"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div>
        <RadioGroupItem
          value="railway-staff"
          id="railway-staff"
          className="peer sr-only"
          onClick={() => onSelectRole("railway-staff")}
        />
        <Label
          htmlFor="railway-staff"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Train className="mb-3 h-32 w-32" />
          Railway Staff
        </Label>
      </div>
      <div>
        <RadioGroupItem
          value="passenger"
          id="passenger"
          className="peer sr-only"
          onClick={() => onSelectRole("passenger")}
        />
        <Label
          htmlFor="passenger"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <User className="mb-3 h-32 w-32" />
          Passenger
        </Label>
      </div>
    </RadioGroup>
    <Button onClick={onNext} className="w-full">
      Continue
    </Button>
  </div>
);

const RailwayStaffForm = ({
  onPrevious,
  onFinish,
}: {
  onPrevious: () => void;
  onFinish: () => void;
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onFinish();
    }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-bold">Railway Staff Setup</h2>
    <div className="space-y-2">
      <Label htmlFor="employeeId">Employee ID</Label>
      <Input id="employeeId" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="station">Home Station</Label>
      <Input id="station" required />
    </div>
    <div className="space-y-2">
      <Label htmlFor="department">Department</Label>
      <Select required>
        <SelectTrigger id="department">
          <SelectValue placeholder="Select department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="freight">Freight</SelectItem>
          <SelectItem value="operations">Operations</SelectItem>
          <SelectItem value="customer-service">Customer Service</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex justify-between">
      <Button type="button" onClick={onPrevious} variant="outline">
        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
      </Button>
      <Button type="submit">Finish Setup</Button>
    </div>
  </form>
);

const PassengerForm = ({
  onPrevious,
  onFinish,
}: {
  onPrevious: () => void;
  onFinish: () => void;
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onFinish();
    }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-bold">Passenger Setup</h2>
    <div className="space-y-2">
      <Label htmlFor="businessType">Business Type</Label>
      <Select required>
        <SelectTrigger id="businessType">
          <SelectValue placeholder="Select business type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="individual">Individual</SelectItem>
          <SelectItem value="company">Company</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="gstin">GSTIN (if applicable)</Label>
      <Input id="gstin" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="frequentCommodities">
        Frequently Transported Commodities
      </Label>
      <Textarea
        id="frequentCommodities"
        placeholder="e.g., Grains, Textiles, Machinery"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="preferredRoutes">Preferred Routes</Label>
      <Textarea
        id="preferredRoutes"
        placeholder="e.g., Mumbai to Delhi, Chennai to Kolkata"
      />
    </div>
    <div className="flex justify-between">
      <Button type="button" onClick={onPrevious} variant="outline">
        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
      </Button>
      <Button type="submit">Finish Setup</Button>
    </div>
  </form>
);

export default function RoleSelect({ userId }: { userId: string }) {
  const [currentScreen, setCurrentScreen] = useState("role-selection");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole) {
      setCurrentScreen(
        selectedRole === "passenger" ? "passenger-form" : "railway-staff-form"
      );
    }
  };

  const handlePrevious = () => {
    setCurrentScreen("role-selection");
  };

  const handleFinish = async (userId: string) => {
    const role = selectedRole === "passenger" ? "PASSENGER" : "TICKET_MANAGER";
    await roleSelection(userId, role);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-8 bg-white dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary text-primary-foreground p-6 text-center">
          <Train className="mx-auto h-16 w-16" />
          <h1 className="mt-4 text-3xl font-bold">RailFreight</h1>
        </div>
        <div className="p-6 md:p-8 lg:p-10">
          {currentScreen === "role-selection" && (
            <RoleSelection
              onSelectRole={handleSelectRole}
              onNext={handleNext}
            />
          )}
          {currentScreen === "railway-staff-form" && (
            <RailwayStaffForm
              onPrevious={handlePrevious}
              onFinish={() => handleFinish(userId)}
            />
          )}
          {currentScreen === "passenger-form" && (
            <PassengerForm
              onPrevious={handlePrevious}
              onFinish={() => handleFinish(userId)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

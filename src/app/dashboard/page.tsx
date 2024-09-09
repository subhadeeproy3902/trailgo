import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Plus, Search, Train, User, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Per Train Income */}
        <Card>
          <CardHeader>
            <CardTitle>Per Train Income</CardTitle>
            <Tabs defaultValue="day" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Train A1", income: "10,000", color: "bg-blue-100" },
                { name: "Train B2", income: "20,800", color: "bg-pink-100" },
                { name: "Train D4", income: "50,000", color: "bg-green-100" },
                { name: "Train D4", income: "23,500", color: "bg-purple-100" },
              ].map((train) => (
                <div
                  key={train.name}
                  className={`p-4 rounded-lg ${train.color}`}
                >
                  <div className="flex items-center mb-2">
                    <Train className="mr-2 h-4 w-4" />
                    <span>{train.name}</span>
                  </div>
                  <div className="text-2xl font-bold">{train.income}</div>
                  <div className="text-sm text-gray-500">Today</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Repair Report */}
        <Card>
          <CardHeader>
            <CardTitle>Repair Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center mb-4">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-200"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 58}
                    strokeDashoffset={2 * Math.PI * 58 * (1 - 0.75)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  1,345
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Train A1", count: 45 },
                { name: "Train B2", count: 500 },
                { name: "Train C3", count: 100 },
                { name: "Train D4", count: 700 },
              ].map((train) => (
                <div key={train.name} className="flex items-center">
                  <Train className="mr-2 h-4 w-4" />
                  <div>
                    <div className="text-sm font-medium">{train.name}</div>
                    <div className="text-sm text-gray-500">{train.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real Time Location */}
        <Card>
          <CardHeader>
            <CardTitle>Real Time Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </CardContent>
        </Card>

        {/* Customers */}
        <Card>
          <CardHeader>
            <CardTitle>Customers</CardTitle>
            <Tabs defaultValue="day" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            {[
              { name: "Brad Simmons", train: "Train B2", rating: 3 },
              { name: "Jessie Clarcson", train: "Train D4", rating: 5 },
              { name: "Lebron Wayde", train: "Train C3", rating: 4 },
            ].map((customer) => (
              <div
                key={customer.name}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <User />
                  </Avatar>
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">
                      {customer.train}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2">
                    {"★".repeat(customer.rating)}
                    {"☆".repeat(5 - customer.rating)}
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Train Service Report */}
        <Card>
          <CardHeader>
            <CardTitle>Train Service Report</CardTitle>
            <div className="flex flex-wrap gap-2">
              {["A1", "B2", "C3", "D4"].map((train) => (
                <Button key={train} variant="outline" size="sm">
                  {train}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-200"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-red-500"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 58}
                    strokeDashoffset={2 * Math.PI * 58 * (1 - 0.74)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  74%
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-gray-500">
              Your train service needed.
            </div>
          </CardContent>
        </Card>

        {/* Other Report */}
        <Card>
          <CardHeader>
            <CardTitle>Other Report</CardTitle>
            <div className="flex flex-wrap gap-2">
              {["A1", "B2", "C3", "D4"].map((train) => (
                <Button key={train} variant="outline" size="sm">
                  {train}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-200"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-purple-500"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 58}
                    strokeDashoffset={2 * Math.PI * 58 * (1 - 0.6)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  8,345
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-sm font-medium">C3 Achievements</div>
              <div className="text-sm text-gray-500">Most Usage</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

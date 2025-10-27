"use client";
import { createContext, useContext, ReactNode } from "react";
import { Repo } from "@/types/repo";

interface RepoContextType {
  repos: Repo[];
}

interface RepoProviderProps {
  children: ReactNode;
  initialRepos: Repo[];
}

const RepoContext = createContext<RepoContextType | undefined>(undefined);

export const RepoProvider: React.FC<RepoProviderProps> = ({
  children,
  initialRepos,
}) => {
  return (
    <RepoContext.Provider value={{ repos: initialRepos }}>
      {children}
    </RepoContext.Provider>
  );
};

export const useRepos = (): RepoContextType => {
  const context = useContext(RepoContext);
  if (!context) throw new Error("useRepos must be used within a RepoProvider");
  return context;
};

import React from 'react'

export default function CardLoading() {
  return (
    <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-2 py-1">
                    <div className="rounded-lg bg-slate-600 h-40 w-30"></div>
                    <div className="h-6 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

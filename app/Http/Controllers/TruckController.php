<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTruckRequest;
use App\Http\Requests\UpdateTruckRequest;
use App\Http\Resources\TruckResource;
use App\Models\Truck;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TruckController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return TruckResource::collection(Truck::all());
    }

    public function indexSpecific(Truck $truck): TruckResource
    {
        return new TruckResource($truck);
    }

    public function store(StoreTruckRequest $request): TruckResource
    {
        $validatedData = $request->validated();
        $valid = Truck::create($validatedData);

        return new TruckResource($valid);
    }

    public function update(UpdateTruckRequest $request, Truck $truck): TruckResource
    {
        $validatedData = $request->validated();
        $truck->update($validatedData);

        return new TruckResource($truck);
    }

    public function destroy(Truck $truck): JsonResponse
    {
        $truck->delete();

        return response()->json(null, 204);

    }
}
